export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: "light",
    properties: {
        "--navbackgroud": "#343a40",
        "--navcolor": "#fff",
        "--navitem": "#b4b7b9",
        "--primary-btn": "#343a40"

    }
};

export const dark: Theme = {
    name: "dark",
    properties: {
        "--navbackgroud": "#007bff",
        "--navcolor": "#fff",
        "--navitem": "#a3d7f9",
        "--primary-btn": "#007bff"
    }
};