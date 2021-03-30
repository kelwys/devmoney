import React from 'react';
import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento website</td>
            <td className="deposit">R$2.000</td>
            <td>Desenvolvimento</td>
            <td>28/02/20021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$500</td>
            <td>Casa</td>
            <td>28/02/20021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
