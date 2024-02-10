import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchRevenue() {
  noStore();
  try {
    console.log("Fetching revenue data...");
    console.time("Revenue data fetch time");
    const data = await sql`SELECT Fecha,                         
                            SUM(CASE WHEN TipoTransaccion = 'Venta' THEN Cantidad ELSE 0 END) AS CantidadVendida
                            FROM Transacciones
                            WHERE Fecha>= CURRENT_DATE - INTERVAL '7 days'
                            GROUP BY Fecha
                            ORDER BY Fecha`;
    console.timeEnd("Revenue data fetch time");
    return data.rows;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Failed to fetch revenue data");
  }
}
