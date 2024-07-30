export default {
    florear: (v) => console.log(v),
    esFloro: (v) => typeof v === "string",
    esFirme: (v) => v === true,
    esBamba: (v) => v === false,
    bambear: (v) => !v,
    limpiarParabrisas: () => console.clear(),
    jatear: (v) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, v)
};
