class EligibilityChecker {
    constructor() {
        this.miamiBounds = {
            north: 25.855,
            south: 25.713,
            east: -80.132,
            west: -80.313
        };
    }

    async checkAddressEligibility(address) {
        try {
            const geocodeUrl = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates`;
            const params = new URLSearchParams({
                SingleLine: address,
                f: 'json',
                outSR: '4326',
                maxLocations: 1,
                countryCode: 'USA'
            });

            const response = await fetch(`${geocodeUrl}?${params}`);
            const data = await response.json();

            if (data.candidates && data.candidates.length > 0) {
                const location = data.candidates[0].location;
                return this.isWithinMiami(location.x, location.y);
            }
            
            return { eligible: false, message: "Address not found" };
        } catch (error) {
            console.error('Geocoding error:', error);
            return { eligible: false, message: "Error checking address" };
        }
    }

    isWithinMiami(longitude, latitude) {
        const isInBounds = latitude >= this.miamiBounds.south && 
                          latitude <= this.miamiBounds.north && 
                          longitude >= this.miamiBounds.west && 
                          longitude <= this.miamiBounds.east;

        return {
            eligible: isInBounds,
            message: isInBounds ? 
                "✅ You are eligible! Address is within Miami city limits." : 
                "❌ Sorry, this address is outside Miami city limits."
        };
    }
}

// Initialize eligibility checker
document.addEventListener('DOMContentLoaded', function() {
    const eligibilityChecker = new EligibilityChecker();
    const input = document.querySelector('#addressInput');
    const messageElement = document.querySelector('.eligibility-message');
    const checkButton = document.querySelector('#checkEligibilityBtn'); // Will be null if no button

    async function performEligibilityCheck() {
        const address = input.value.trim();
        if (address) {
            messageElement.textContent = 'Checking eligibility...';
            const result = await eligibilityChecker.checkAddressEligibility(address);
            messageElement.textContent = result.message;
            messageElement.className = `eligibility-message ${result.eligible ? 'eligible' : 'not-eligible'}`;
        }
    }

    // Support both button click and Enter key
    if (checkButton) {
        checkButton.addEventListener('click', performEligibilityCheck);
    }

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performEligibilityCheck();
        }
    });
});