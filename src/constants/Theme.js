export const Theme = {
    dark : {
        id: "dark",
        bgDark: "bg-dark",
        textDark: "text-dark",
        textLight: "text-light",
        textLightFaded: "text-lighted",
        borderPrimary: "border-dark",
        borderLight: "border-white",

        navbar: {
            bg: "bg-customGray-500",
            text: "text-customGray-100",
            shadow: "",
            switchBg: "white",
            switchIcon: "#31343E",
            switchTrack: "#ffffffb3",
        },
        body : {
            bg: "bg-customGray-400",
            text: "text-white"
        },
        todo:{
            bg: "bg-customGray-200",
            text: "text-white",
            shadow: "drop-shadow-sm",
            // formBtnBg: "#E6DED5",
            formBtnBg: "#ffffff17",
            // formBtnHoverBg: "#D5C8BA",
            formBtnHoverBg: "#ffffff21",
            // formBtnText: "#23262E",
            formBtnText: "#fff",
        }
    },
    light:{
        id:"light",
        bgDark: "bg-white",
        textLight: "text-primary",
        textLightFaded:"text-dark",
        borderPrimary: "border-dark",

        navbar: {
            bg: "bg-white",
            text: "text-primary",
            shadow: "",
            switchBg: "#31343E",
            switchIcon: "#31343E",
            switchTrack: "#00000059",
        },
        body : {
            bg: "bg-white",
            text: "text-customGray-300"
        },
        todo:{
            bg: "bg-white",
            text: "text-customGray-300",
            shadow: "drop-shadow-lg",
            formBtn: "#31343E",
        }
    }
}