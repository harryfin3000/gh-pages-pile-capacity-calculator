document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pileForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const length = parseFloat(document.getElementById('pileLength').value);
        const diameter = parseFloat(document.getElementById('pileDiameter').value);
        const soilType = document.getElementById('soilType').value;

        let capacity;
        switch(soilType) {
            case 'sand':
                capacity = calculateSandCapacity(length, diameter);
                break;
            case 'clay':
                capacity = calculateClayCapacity(length, diameter);
                break;
            case 'silt':
                capacity = calculateSiltCapacity(length, diameter);
                break;
            default:
                capacity = 0;
        }

        resultDiv.innerHTML = `<h3>Result:</h3><p>The estimated pile capacity is ${capacity.toFixed(2)} kN.</p>`;
    });
});

function calculateSandCapacity(length, diameter) {
    // This is a simplified calculation and should be replaced with actual formulas
    return length * diameter * 1000;
}

function calculateClayCapacity(length, diameter) {
    // This is a simplified calculation and should be replaced with actual formulas
    return length * diameter * 800;
}

function calculateSiltCapacity(length, diameter) {
    // This is a simplified calculation and should be replaced with actual formulas
    return length * diameter * 600;
}