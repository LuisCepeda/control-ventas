export const formatCurrency = (amount) => {
  return amount.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });
};

export const formatDateToLocal = (dateStr, locale) => {
  const date = new Date(dateStr);
  const options = (Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short",
  });
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue = []) => {
  //console.log("revenue1", revenue);
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((day) => day.cantidadvendida));

  //const topLabel = Math.ceil(highestRecord / 1000) * 1000;
  const topLabel = highestRecord;
  //console.log("topLabel", topLabel);
  for (let i = topLabel; i >= 0; i -= 10) {
    yAxisLabels.push(`$${i}`);
  }
  return { yAxisLabels, topLabel };
};
