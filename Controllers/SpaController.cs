using Microsoft.AspNetCore.Mvc;

public class SpaController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
