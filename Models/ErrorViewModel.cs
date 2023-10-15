// Copyright (c) Curtis Hollibaugh. All rights reserved.

namespace ChecklistApp.Models;

/// <summary>
/// Represents the view model for the error page.
/// </summary>
public class ErrorViewModel
{
    /// <summary>
    /// Gets or sets the ID of the request.
    /// </summary>
    public string? RequestId { get; set; }

    /// <summary>
    /// Gets a value indicating whether to show the request ID or not.
    /// </summary>
    public bool ShowRequestId => !string.IsNullOrEmpty(this.RequestId);
}
