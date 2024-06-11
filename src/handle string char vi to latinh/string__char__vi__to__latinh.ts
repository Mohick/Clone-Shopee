
declare global {
    interface String {
        /**
         * Chuyển đổi các ký tự tiếng Việt có dấu thành các ký tự không dấu và loại bỏ khoảng trắng.
         *     examples : 
    const item = {
        kind: "Đặng Thị Thuý"
    };
    
    const kind = item.kind.exChangesStringCharViToLatinh();
    console.log(kind);  output: "dangthithuy"
         * 
         * @returns {"String"}
         */
        exChangesStringCharViToLatinh(): string;

    }
}

String.prototype.exChangesStringCharViToLatinh = function (): string {



    return this.toLocaleLowerCase()
        .trim()
        .replace(/\s+/g, "")
        .replace(/đ/g, "d")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};


export { }; 
