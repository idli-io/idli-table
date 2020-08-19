/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IdliTable {
        /**
          * The grid columns configuration. Sample [{"name":"name","label":"Name","width":300,"fixed":true},{"name":"age","label":"Age"},{"name":"eyeColor","label":"Eye Color","width":500}].
         */
        "columnConfig": any[] | string;
        "data": any[] | string;
        "rowKey": string;
        "selectionType": 'checkbox' | undefined;
    }
}
declare global {
    interface HTMLIdliTableElement extends Components.IdliTable, HTMLStencilElement {
    }
    var HTMLIdliTableElement: {
        prototype: HTMLIdliTableElement;
        new (): HTMLIdliTableElement;
    };
    interface HTMLElementTagNameMap {
        "idli-table": HTMLIdliTableElement;
    }
}
declare namespace LocalJSX {
    interface IdliTable {
        /**
          * The grid columns configuration. Sample [{"name":"name","label":"Name","width":300,"fixed":true},{"name":"age","label":"Age"},{"name":"eyeColor","label":"Eye Color","width":500}].
         */
        "columnConfig"?: any[] | string;
        "data"?: any[] | string;
        "onCellClicked"?: (event: CustomEvent<any>) => void;
        "onSelectChange"?: (event: CustomEvent<any>) => void;
        "rowKey"?: string;
        "selectionType"?: 'checkbox' | undefined;
    }
    interface IntrinsicElements {
        "idli-table": IdliTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "idli-table": LocalJSX.IdliTable & JSXBase.HTMLAttributes<HTMLIdliTableElement>;
        }
    }
}
