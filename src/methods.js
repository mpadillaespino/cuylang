export default {
    bambear: (v) => v ? "bamba" : "firme",
    esBamba: (v) => v === false ? "firme" : "bamba",
    esChamba: (v) => typeof v === "function" ? "firme" : "bamba",
    esFirme: (v) => v === true ? "firme" : "bamba",
    esFloro: (v) => typeof v === "string" ? "firme" : "bamba",
    florear: (v) => console.log(v),
    jatear: (v) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, v),
    limpiarParabrisas: () => console.clear(),
    tinka: (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min))
};
