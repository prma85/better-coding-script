"use strict";

function evalToString(ast /* : Object */) /* : string */ {
  switch (ast.type) {
    case "StringLiteral":
    case "Literal": // ESLint
      return ast.value;
    case "BinaryExpression": // `+`
      if (ast.operator !== "+") {
        throw new Error(`Unsupported binary operator ${ast.operator}`);
      }
      return evalToString(ast.left) + evalToString(ast.right);
    default:
      throw new Error(`Unsupported type ${ast.type}`);
  }
}

module.exports = evalToString;
