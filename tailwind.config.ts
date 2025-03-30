import TypographyPlugin from "@tailwindcss/typography";
import FormPlugin from "@tailwindcss/forms";
import ContainerQueriesPlugin from "@tailwindcss/container-queries";
import { type Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#fffaf4",
			},
		},
	},
	plugins: [TypographyPlugin, FormPlugin, ContainerQueriesPlugin],
};

export default config;
