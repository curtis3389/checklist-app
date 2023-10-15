// Copyright (c) Curtis Hollibaugh. All rights reserved.

namespace ChecklistApp.Controllers;

using Microsoft.AspNetCore.Mvc;

/// <summary>
/// Represents the controller for the Checklist Single-Page App.
/// </summary>
public class SpaController : Controller
{
    /// <summary>
    /// Returns the view that runs the single-page app.
    /// </summary>
    /// <returns>The view.</returns>
    public IActionResult Index()
    {
        return this.View();
    }
}
