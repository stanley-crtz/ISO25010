import React from 'react'
import Chart from "react-google-charts";

const PieChart = (props) => {

    return (
        <Chart
            width={400}
            height={300}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['City', '2000 Population'],
                ['New York City, NY', 8008000, 90, 99, 89],
                ['Los Angeles, CA', 3694000],
                ['Chicago, IL', 2896000],
                ['Houston, TX', 1953000],
                ['Philadelphia, PA', 1517000],
            ]}
            options={{
                title: 'Resultados Globales',
                chartArea: { width: '30%' },
                hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                },
                vAxis: {
                    title: 'City',
                },
            }}
            legendToggle
        />
    )
}
export default PieChart