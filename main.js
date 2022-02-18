const broadCast = (funct) => {
}


const announceRain = () => {
    console.log("Grab and umbrella, It's going to rain today.")
}

const announceClear = () => {
    console.log("Grab your shades and sunscreen. It's going to be sunny and hot today.")
}

const weatherStation = (hum) => {
    if (hum>95){
        announceRain()
    }else{
        announceClear()
    }

}

weatherStation(90)