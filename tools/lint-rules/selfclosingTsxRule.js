var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new TsxWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = "TSX tag can be self closing";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var TsxWalker = (function (_super) {
    __extends(TsxWalker, _super);
    function TsxWalker() {
        _super.apply(this, arguments);
    }

    TsxWalker.prototype.visitJsxElement = function (node) {
      _super.prototype.visitJsxElement.call(this, node);

      if (!node.children.length) {
        var failure = this.createFailure(node.getStart(), 1, Rule.FAILURE_STRING);
        this.addFailure(failure);
      }
    };

    return TsxWalker;
})(Lint.SkippableTokenAwareRuleWalker);
