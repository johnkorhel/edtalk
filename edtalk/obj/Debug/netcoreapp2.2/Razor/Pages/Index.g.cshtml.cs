#pragma checksum "C:\Users\Cameron\Documents\TSA\Software Dev\edtalk\edtalk\Pages\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "003ff73c486c7812f0c60f2db7058577da1fd4f8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(edtalk.Pages.Pages_Index), @"mvc.1.0.razor-page", @"/Pages/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Pages/Index.cshtml", typeof(edtalk.Pages.Pages_Index), null)]
namespace edtalk.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\Cameron\Documents\TSA\Software Dev\edtalk\edtalk\Pages\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#line 2 "C:\Users\Cameron\Documents\TSA\Software Dev\edtalk\edtalk\Pages\_ViewImports.cshtml"
using edtalk;

#line default
#line hidden
#line 3 "C:\Users\Cameron\Documents\TSA\Software Dev\edtalk\edtalk\Pages\_ViewImports.cshtml"
using edtalk.Data;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"003ff73c486c7812f0c60f2db7058577da1fd4f8", @"/Pages/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"39fe57b4d536205bbff2505b59907a26d7f6d70e", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 3 "C:\Users\Cameron\Documents\TSA\Software Dev\edtalk\edtalk\Pages\Index.cshtml"
  
    ViewData["Title"] = "Home";

#line default
#line hidden
            BeginContext(79, 380, true);
            WriteLiteral(@"<div class=""mdl-grid"">
    <div class=""mdl-layout-spacer""></div>
    <div class=""mdl-cell mdl-cell--4-col"">
        <h1 class=""headerText"">edtalk.io</h1>
        <h1 class=""subHeaderText"">a simple classroom communication platform for the modern student and educator</h1>
    </div>
    <div class=""mdl-layout-spacer""></div>
    <div class=""mdl-layout-spacer""></div>
</div>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<edtalk.Pages.IndexModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<edtalk.Pages.IndexModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<edtalk.Pages.IndexModel>)PageContext?.ViewData;
        public edtalk.Pages.IndexModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
