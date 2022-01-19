import './Charts.css'
import ChartBar from './ChartBar'

function Charts({ dataPoints }) {
    const valueArray = dataPoints.map(dataPoint => dataPoint.value)
    const maxAmount = Math.max(...valueArray)
    return (
        <div className="chart">
            {
                dataPoints.map(dataPoint =>
                (<ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxAmount}
                    label={dataPoint.label}
                />))
            }
        </div>
    )
}

export default Charts;