package com.ausy_expo.demo.service;

import com.ausy_expo.demo.model.Stock;
import java.util.List;

public interface StockService {
    Stock createStock(Stock stock);
    Stock updateStock(Long id, Stock stock);
    void deleteStock(Long id);
    Stock getStockById(Long id);
    List<Stock> getAllStocks();
}