export default (worker: Function): SharedWorker => {
    const code = worker.toString();
    const blob = new Blob(["(" + code + ")()"]);
    return new SharedWorker(URL.createObjectURL(blob));
}