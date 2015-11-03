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
        return this.applyWithWalker(new BlankLinesWalker(sourceFile, this.getOptions()));
    };
    Rule.METHOD_FAILURE_STRING = "methods should have one blank line above them";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var BlankLinesWalker = (function (_super) {
    __extends(BlankLinesWalker, _super);
    function BlankLinesWalker() {
        _super.apply(this, arguments);
    }

    BlankLinesWalker.prototype.visitMethodDeclaration = function (node) {
      _super.prototype.visitMethodDeclaration.call(this, node);

      if (node.parent.kind === 212) { // Class declaration
        if (!node.getFullText().startsWith('\n\n')) {
          var failure = this.createFailure(node.getStart(), 1, Rule.METHOD_FAILURE_STRING);
          this.addFailure(failure);
        }
      }
    };

    BlankLinesWalker.prototype.visitConstructorDeclaration = function (node) {
      _super.prototype.visitConstructorDeclaration.call(this, node);
      if (!node.getFullText().startsWith('\n\n')) {
        var failure = this.createFailure(node.getStart(), 1, Rule.METHOD_FAILURE_STRING);
        this.addFailure(failure);
      }
    };

    return BlankLinesWalker;
})(Lint.SkippableTokenAwareRuleWalker);
