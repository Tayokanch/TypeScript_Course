let Speed : number | null = null;
let ride = {
    /* This is a Nullish coalescing operator 
    which means - if Speeed !== null or Speed !== undefined use the value of speed
    else use 30 
     */
    speed: Speed ?? 30

}