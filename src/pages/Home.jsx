import Calender from "../calender/Calender"

export default function Home() {
    const month = new Date();
    const monthName = month.toLocaleDateString('en-US', { month: 'long' });

    return (
        <div className="h-[calc(100vh-300px)] flex flex-col justify-center">
            <div className="flex justify-between items-center mb-[30px]">
                <button className="border-none bg-transparent text-white">{`<`}</button>
                <h1>{monthName}</h1>
                <button className="border-none bg-transparent text-white">{`>`}</button>
            </div>
            <Calender />
        </div>
    )
}