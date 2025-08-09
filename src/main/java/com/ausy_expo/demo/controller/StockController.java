package com.ausy_expo.demo.controller;

import com.ausy_expo.demo.model.Stock;
import com.ausy_expo.demo.service.StockService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stocks")
@RequiredArgsConstructor
public class StockController {

    private final StockService stockService;

    @GetMapping
    public List<Stock> getAll() {
        return stockService.getAllStocks();
    }

    @GetMapping("/{id}")
    public Stock getById(@PathVariable Long id) {
        return stockService.getStockById(id);
    }

    @PostMapping
    public Stock create(@RequestBody Stock stock) {
        return stockService.createStock(stock);
    }

    @PutMapping("/{id}")
    public Stock update(@PathVariable Long id, @RequestBody Stock stock) {
        return stockService.updateStock(id, stock);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        stockService.deleteStock(id);
    }
}
