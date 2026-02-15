export const generatePie = (pies: number) => {
	return new Array(pies).fill(0).map((_,i) => ({
		value: Math.floor(Math.random() * (100 - 1 + 1) + 1),
		label: `Pie ${(i + 1).toString()}`
	}))
}
