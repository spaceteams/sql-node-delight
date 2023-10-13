import { Client } from "@lyra/core";
export function complexInsert(client: Client, salaryMul: number, whereDepartmentEq: string) {
    const sql = `
  INSERT INTO bonuses (employee_id, bonus)
  SELECT employee_id, salary * $1 AS bonus_amount
  FROM employees
  WHERE department = $2;
  `;
    return client.executeVoid({ name: "complexInsert", sql, values: [salaryMul, whereDepartmentEq] as const });
}
