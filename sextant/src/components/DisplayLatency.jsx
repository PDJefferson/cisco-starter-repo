import useWebsocket from "../hooks/useWebsocket";
export default function DisplayLatency() {
    const serverDate  = parseFloat(useWebsocket("ws://localhost:55455"));
    const currentDate = parseFloat(new Date().getTime());
    const latency =  parseFloat(currentDate - serverDate);
    return (
        <p>
            {`${latency} ms`}
        </p>
    )
}