import { useState, useEffect } from "react"

export default function Settings() {
    const [theme, setTheme] = useState("light")

    const primaryColors = [
        "rgb(255,0,86)",
        "rgb(33,150,243)",
        "rgb(255,193,7)",
        "rgb(0,200,83)",
        "rgb(156,39,176)",
    ]

    const [setting , setSetting] = useState({
        "--background-color":"#fff",
        "--background-light":"#fff",
        "--shadow-color":"rgba(0 ,0 ,0,0.2)",
        "--primary-color":"rgb(255,0,86)",
        "--text-color":"#0A0A0A",
        "--text-light":"#575757",
        "--font-size":"16px",
        "--animation-speed":1,
    })
    useEffect(() => {
        // console.log("setting updated")
        const root = document.documentElement
        for(let key in setting){
            root.style.setProperty(key , setting[key])
        }
    },[setting])

    const themes = [
        {
            "--background-color":"#fff",
            "--background-light":"#fff",
            "--shadow-color":"rgba(0 ,0 ,0,0.2)",
            "--text-color":"#0A0A0A",
            "--text-light":"#575757",
        },
        {
            "--background-color":"rgb(29, 29, 29)",
            "--background-light":"rgb(77, 77, 77)",
            "--shadow-color":"rgba(0 ,0 ,0,0.2)",
            "--text-color":"#ffffff",
            "--text-light":"#eceaea",
        }
    ]

    function changeTheme(i) {
        const _theme = {...themes[i]}
        setTheme(i==0 ? "light":"dark")
        //update setting
        let _settings = {...setting}
        for(let key in _theme){
            _settings[key] = _theme[key]
            // console.log(_theme[key])
        }
        setSetting(_settings)

    }

    function changeColor(i){
        const _color = primaryColors[i]
        let _settings = {...setting}
        _settings["--primary-color"] = _color
        setPrimaryColor(i)
        setSetting(_settings)
    }

    function changeFontSize(i){
        const _size = fontSizes[i]
        let _settings = {...setting}
        _settings["--font-size"] = _size.value
        setFontSize(i)
        setSetting(_settings)
    }

    function changeAnimationSpeed(i){
        let _speed = animationSpeeds[i]
        let _settings = {...setting}
        _settings['--animation-speed'] = _speed.value
        setAnimationSpeed(i)
        setSetting(_settings)
    }

    const fontSizes = [
        {
            title: "Small",
            value: "12px",
        },
        {
            title: "Medium",
            value: "16px",
        },
        {
            title: "Large",
            value: "20px",
        },
    ]
    const animationSpeeds = [
        {
            title: "Slow",
            value: "2",
        },
        {
            title: "Medium",
            value: "1",
        },
        {
            title: "Fast",
            value: ".5",
        },
    ]

    const [primaryColor, setPrimaryColor] = useState(0)
    const [fontSize, setFontSize] = useState(1)
    const [animationSpeed, setAnimationSpeed] = useState(1)

    return (
        <div>
            <div className="section d-block">
                <h2>Primary Theme</h2>
                <div className="options-container">
                    <div className="option light" onClick={()=> changeTheme(0)}>
                        {theme === "light" && (
                            <div className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                            </div>
                        )}

                    </div>
                    <div className="option dark" onClick={()=> changeTheme(1)}>
                        {theme === "dark" && (
                            <div className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="section d-block">
                <h2>Preferred Color</h2>
                <div className="options-container">
                    {primaryColors.map((color, index) => (
                        <div className="option light" style={{ backgroundColor: color }} onClick={() => changeColor(index)}>
                            {primaryColor == index && (
                                <div className="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
            
            <div className="section d-block">
                <h2>Font Size</h2>
                <div className="options-container">
                    {fontSizes.map((size, index) => (
                        <button className="btn" onClick={() => changeFontSize(index)}>
                            {size.title}
                            {fontSize == index && <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg></span>}
                        </button>
                    ))}

                </div>
            </div>
            <div className="section d-block">
                <h2>Animation Speed</h2>
                <div className="options-container">
                    {animationSpeeds.map((speed, index) => (
                        <button className="btn" onClick={() => changeAnimationSpeed(index)}>
                            {speed.title}
                            {animationSpeed == index && <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                            </svg></span>}
                        </button>
                    ))}

                </div>
            </div>
            
        </div>
    )
}