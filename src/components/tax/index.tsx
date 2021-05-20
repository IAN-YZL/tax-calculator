import { Alert, Button, Col, Divider, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'

const TaxLayout = styled.div`
	width: 600px;
	border: 7px solid #e2e2e2;
	margin: 0 auto;
	margin-top: 20px;
	text-align: left;
`

const TaxTableWrapper = styled.div`
	padding: 0 20px;
	font-family: Helvetica, Verdana, Arial, Sans-serif;
`

const IncomeText = styled(Col)`
	text-align: left;
	padding: 5px;
`

const RateText = styled(Col)`
	text-align: right;
	padding: 5px;
`

const CustomDivider = styled(Divider)`
	margin: 0;
	color: #cccccc;
`

const HeaderWrapper = styled.div`
	padding: 11px;
`

const TaxHeader = () => (
	<HeaderWrapper>
		<h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Income Tax</h2>
		<p style={{ paddingTop: '11px', margin: 0, fontSize: '13px' }}>Please read important notes about the use of this calculator</p>
	</HeaderWrapper>
)

const InputHeaderWrapper = styled.div`
	height: 36px;
	width: 100%;
	background-color: ${props => props.color};
	color: white;
	border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
	display: flex;
	font-size: 13px;
`

const TagWrapper = styled.p`
	background-color: #1998A6;
	width: 36px;
	height: 36px;
	border-radius: 18px;
	text-align: center;
	line-height: 36px;
`

const InputContentWrapper = styled.div`
	margin: 25px 0 30px 15px;
	display: flex;
	font-size: 12px;
	font-weight: bold;
`

const InputFrame = styled.input`
	padding: 3px 7px;
	margin-left: 10px;
`

const CalculateBtn = styled(Button)`
	background: -webkit-gradient(linear, left top, left bottom, from(#faca3b), to(#d8a819));
	color: white;
	font-weight: bold;
	border-radius: 5px;
	margin-left: 15px;
`

const InputComponent = (props: { taxInput: string, inputChange: (input: string) => void, buttonClick: () => void }) => {
	return (
		<>
			<InputHeaderWrapper color='#727272'>
				<h3 style={{ display: 'flex', color: 'white' }}>
					<TagWrapper>1</TagWrapper>
					<p style={{ lineHeight: '36px', marginLeft: '15px', fontWeight: 'bold', fontSize: '13px' }}>Your details</p>
				</h3>

			</InputHeaderWrapper>
			<InputContentWrapper>
				<p>Your annual income
				<InputFrame value={props.taxInput} onChange={event => props.inputChange(event.target.value)} onBlur={props.buttonClick} />
				</p>
				<CalculateBtn onClick={props.buttonClick}>Calculate</CalculateBtn>
			</InputContentWrapper>

		</>
	)
}

type taxData = {
	key: string,
	minimumIncome: number,
	maximumIncome: number | null,
	taxRate: number
}

const taxSource: taxData[] = [
	{ key: '1', minimumIncome: 0, maximumIncome: 18200, taxRate: 0 },
	{ key: '2', minimumIncome: 18201, maximumIncome: 45000, taxRate: 19 },
	{ key: '3', minimumIncome: 45001, maximumIncome: 120000, taxRate: 32.5 },
	{ key: '4', minimumIncome: 120001, maximumIncome: 180000, taxRate: 37 },
	{ key: '5', minimumIncome: 180001, maximumIncome: null, taxRate: 45 },
]

const ThresholdTable = () => (
	<TaxTableWrapper>
		<h4 style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '20px' }}>Current Tax Thresholds 2020-2021</h4>
		<Row>
			<IncomeText span={16}><span style={{ fontWeight: 'bold' }}>Income Range</span></IncomeText>
			<RateText span={8}><span style={{ fontWeight: 'bold' }}>Tax Rate</span></RateText>
		</Row>
		<CustomDivider />
		{taxSource.map(data => {
			const incomeRange = `${currencyFormatter.format(data.minimumIncome)} - ${data.maximumIncome ? `${currencyFormatter.format(data.maximumIncome)}` : '+'}`
			const taxRate = `${data.taxRate.toFixed(1)}%`
			return (
				<div key={data.key}>
					<Row>
						<IncomeText span={16}>{incomeRange}</IncomeText>
						<RateText span={8}>{taxRate}</RateText>
					</Row>
					<CustomDivider />
				</div>
			)
		})}

	</TaxTableWrapper>
)

const TotalTaxWrapper = styled.div`
	background-color: ${props => props.color};
	margin-bottom: 3px;
	font-family: Arial, Helvetica, sans-serif;
	padding: 10px;
`

const TaxLabel = styled.h4`
	font-size: '14px';
	font-weight: bold;
	color: #666666;
	margin: 0;
`

const TotalTax = (props: { tax: string }) => (
	<TotalTaxWrapper color='#eeeeee' style={{ height: '85px' }}>
		<TaxLabel>Tax on income</TaxLabel>
		<p style={{ fontSize: '36px', fontWeight: 'bold', margin: 0 }}>{props.tax}</p>
	</TotalTaxWrapper>
)

const ShadowCurrency = styled.p`
	font-size: 25px;
	color: #777777;
	margin: 0;
	font-weight: bold;

`

const AnalyseTax = (props: { netIncome: string, incomePerWeek: string }) => (
	<TotalTaxWrapper color='#dddddd' style={{ height: '190px' }}>
		<div>
			<TaxLabel>Net income per annum</TaxLabel>
			<ShadowCurrency>{props.netIncome}</ShadowCurrency>
		</div>
		<div>
			<TaxLabel>Net income per week</TaxLabel>
			<ShadowCurrency>{props.incomePerWeek}</ShadowCurrency>
		</div>
	</TotalTaxWrapper>
)

const TaxDisplay = (props: { totalTax: string, netIncome: string, incomePerWeek: string }) => (
	<div style={{ marginTop: '10px', marginRight: '10px' }}>
		<TotalTax tax={props.totalTax} />
		<AnalyseTax netIncome={props.netIncome} incomePerWeek={props.incomePerWeek} />
	</div>
)


const ResultComponent = () => (
	<InputHeaderWrapper color='#444444'>
		<h3 style={{ marginLeft: '15px', lineHeight: '36px', color: 'white', fontWeight: 'bold', fontSize: '13px' }}>Your Result</h3>
	</InputHeaderWrapper>
)

const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0
})

const TaxCalculator = () => {

	const [incomeInput, setIncomeInput] = React.useState(85000)
	const [calculateIncome, setCalculateIncome] = React.useState(incomeInput)
	const [showAlert, toggleAlert] = React.useState(false)
	const inputChange = (input: string) => {
		let intInput = input.replace('$', '')
		intInput = intInput.replace(',', '')
		if (intInput.length > 7) {
			toggleAlert(true)
			setTimeout(() => toggleAlert(false), 3000)
		}
		setIncomeInput(parseInt(intInput))
	}

	const calculateTotalTax = () => {
		const income = calculateIncome
		let tax = 0
		taxSource.map(data => {
			if (!!data.maximumIncome && income > data.maximumIncome) {
				tax = tax + (data.maximumIncome - data.minimumIncome + 1) * (data.taxRate / 100)
			} else if (income > data.minimumIncome) {
				tax = tax + (income - data.minimumIncome + 1) * (data.taxRate / 100)
			}
			return null
		})
		return tax
	}

	const calculateAction = () => {
		setCalculateIncome(incomeInput)

	}

	return (
		<>
			{showAlert && <Alert message='The number is too big!' type='warning' showIcon />}

			<TaxLayout>
				<TaxHeader />
				<InputComponent taxInput={currencyFormatter.format(incomeInput)} inputChange={inputChange} buttonClick={calculateAction} />
				<ResultComponent />
				<Row gutter={24}>

					<Col span={14}><ThresholdTable /></Col>
					<Col span={10}>
						<TaxDisplay
							totalTax={currencyFormatter.format(calculateTotalTax())}
							netIncome={currencyFormatter.format(calculateIncome - calculateTotalTax())}
							incomePerWeek={currencyFormatter.format((calculateIncome - calculateTotalTax()) / 52)}
						/>
					</Col>
				</Row>
			</TaxLayout>
		</>
	)
}

export default TaxCalculator