const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const rVal = document.getElementById("rVal");
const gVal = document.getElementById("gVal");
const bVal = document.getElementById("bVal");

const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");
const colorPicker = document.getElementById("colorPicker");


function clamp(value) {
    return Math.min(255, Math.max(0, value));
}

function hexToRgb(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
}


function updateColor(r, g, b) {
    r = clamp(r);
    g = clamp(g);
    b = clamp(b);

    // Sincronizar sliders
    red.value = r;
    green.value = g;
    blue.value = b;

    // Sincronizar inputs numéricos
    redNum.value = r;
    greenNum.value = g;
    blueNum.value = b;

    // Mostrar valores
    rVal.textContent = r;
    gVal.textContent = g;
    bVal.textContent = b;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbValue.textContent = rgb;

    const hex = "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexValue.textContent = hex.toUpperCase();

    colorPicker.value = hex.toUpperCase();

}

// Eventos sliders
red.addEventListener("input", () =>
    updateColor(red.value, green.value, blue.value)
);

green.addEventListener("input", () =>
    updateColor(red.value, green.value, blue.value)
);

blue.addEventListener("input", () =>
    updateColor(red.value, green.value, blue.value)
);

// Eventos inputs numéricos
redNum.addEventListener("input", () =>
    updateColor(redNum.value, greenNum.value, blueNum.value)
);

greenNum.addEventListener("input", () =>
    updateColor(redNum.value, greenNum.value, blueNum.value)
);

blueNum.addEventListener("input", () =>
    updateColor(redNum.value, greenNum.value, blueNum.value)
);

colorPicker.addEventListener("input", () => {
    const { r, g, b } = hexToRgb(colorPicker.value);
    updateColor(r, g, b);
});

// Inicializar
updateColor(0, 0, 0);
