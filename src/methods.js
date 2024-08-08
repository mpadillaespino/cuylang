export default {
    bambear: (v) => !v,
    esBamba: (v) => v === false,
    esChamba: (v) => typeof v === "function",
    esFirme: (v) => v === true,
    esFloro: (v) => typeof v === "string",
    florear: (v) => console.log(v),
    jatear: (v) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, v),
    limpiarParabrisas: () => console.clear(),
    tinka: (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min))
};
