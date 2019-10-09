"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const typegoose_1 = require("@typegoose/typegoose");
exports.TypegooseMiddleware = async (_, next) => {
    const result = await next();
    if (Array.isArray(result)) {
        return result.map(item => item instanceof mongoose_1.Model ? convertDocument(item) : item);
    }
    if (result instanceof mongoose_1.Model) {
        return convertDocument(result);
    }
    return result;
};
function convertDocument(doc) {
    const convertedDocument = doc.toObject();
    const DocumentClass = typegoose_1.getClassForDocument(doc);
    Object.setPrototypeOf(convertedDocument, DocumentClass.prototype);
    return convertedDocument;
}
//# sourceMappingURL=typegoose-middleware.js.map