/*
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
        return this.applyWithWalker(new TrailingCommaWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING_NEVER = "trailing comma";
    Rule.FAILURE_STRING_ALWAYS = "missing trailing comma";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var TrailingCommaWalker = (function (_super) {
    __extends(TrailingCommaWalker, _super);
    function TrailingCommaWalker() {
        _super.apply(this, arguments);
    }
    TrailingCommaWalker.prototype.visitArrayLiteralExpression = function (node) {
        this.lintNode(node);
        _super.prototype.visitArrayLiteralExpression.call(this, node);
    };
    TrailingCommaWalker.prototype.visitBindingPattern = function (node) {
        if (node.kind === 160 || node.kind === 159) {
            this.lintNode(node);
        }
        _super.prototype.visitBindingPattern.call(this, node);
    };
    TrailingCommaWalker.prototype.visitNamedImports = function (node) {
        this.lintNode(node);
        _super.prototype.visitNamedImports.call(this, node);
    };
    TrailingCommaWalker.prototype.visitObjectLiteralExpression = function (node) {
        this.lintNode(node);
        _super.prototype.visitObjectLiteralExpression.call(this, node);
    };
    TrailingCommaWalker.prototype.lintNode = function (node) {
        var child = node.getChildAt(1);
        if (child != null && child.kind === 269) {
            var isMultiline = child.getFullText().match(/\n|\r/);
            var option = this.getOption(isMultiline ? "multiline" : "singleline");
            var grandChildren = child.getChildren();
            if (grandChildren.length > 0) {
                var lastGrandChild = grandChildren[grandChildren.length - 1];
                var hasTrailingComma = lastGrandChild.kind === 24;
                if (hasTrailingComma && option === "never") {
                    this.addFailure(this.createFailure(lastGrandChild.getStart(), 1, Rule.FAILURE_STRING_NEVER));
                }
                else if (!hasTrailingComma && option === "always") {
                    this.addFailure(this.createFailure(lastGrandChild.getEnd(), 1, Rule.FAILURE_STRING_ALWAYS));
                }
            }
        }
    };
    TrailingCommaWalker.prototype.getOption = function (option) {
        var allOptions = this.getOptions();
        if (allOptions == null || allOptions.length === 0) {
            return null;
        }
        var options = allOptions[0];
        return options[option];
    };
    return TrailingCommaWalker;
})(Lint.RuleWalker);
