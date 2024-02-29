using API.Models;
using API.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;

namespace API.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductsController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<List<Product>> GetProducts()
        {
            return await _productService.GetProducts();
        }

        [HttpGet("{id}")]
        public async Task<Product> GetProductById(int id)
        {
            Product product = await _productService.GetProductById(id);
            return product;
        }

        [HttpPost]
        public async Task<Product> AddProduct([FromBody] Product product)
        {
            return await _productService.AddProduct(product);
        }


        [HttpPut("{id}")]
        public async Task<Product> UpdateProduct(int id, [FromBody] Product product)
        {
            return await _productService.UpdateProduct(id, product);
        }

        // DELETE /products/{id}
        [HttpDelete("{id}")]
        public async void DeleteProduct(int id)
        {
            await _productService.DeleteProduct(id);
        }
    }
}