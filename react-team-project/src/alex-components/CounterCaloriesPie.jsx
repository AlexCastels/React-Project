import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

export default function CounterCaloriesPie({macro}) {
   
    const chartConfig = {
        type: "pie",
        width: 400,
        height: 400,
        series: [Math.floor(Number(macro.protein)) , Math.floor(Number(macro.fat)) , Math.floor(Number(macro.carbo))],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            title: {
                show: "la mia torta",
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
            legend: {
                show: true,
            },
            labels: ['PROTEIN g' , 'FAT g' , 'CARBO g'],
        },
    };
    
    return (
        <Card>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
                <div>
                    <Typography variant="h6" color="blue-gray">
                        {/* TITOLO */}
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="max-w-sm font-normal"
                    >
                        {/* inserire descrizione qui  */}
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="mt-4 grid place-items-center px-2">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
}
