declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
declare module '*.pdf' {
    const content: Record<string, blob>;
    export default content;
}
declare module '*.png' {
    const content: Record<string>;
    export default content;
}
declare module '*.webp' {
    const content: Record<string>;
    export default content;
}

declare module '*.jpg' {
    const content: Record<string>;
    export default content;
}
declare module '*.svg?inline' {
    const content: any
    export default content
}

declare module '*.svg' {
    const content: any
    export default content
}
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}