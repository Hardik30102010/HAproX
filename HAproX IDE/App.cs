using System;
using System.Windows.Forms;
using Microsoft.Web.WebView2.WinForms;

namespace HAproXIDE
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            this.WindowState = FormWindowState.Maximized;
            this.Text = "HAproX IDE";

            WebView2 webView = new WebView2();
            webView.Dock = DockStyle.Fill;
            this.Controls.Add(webView);

            webView.Source = new Uri(Application.StartupPath + "/index.html");
        }
    }
}
