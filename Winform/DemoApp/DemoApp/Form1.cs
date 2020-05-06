using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace DemoApp
{
    public partial class Form1 : Form
    {
        private Int32 count = 0;


        public Form1()
        {
            InitializeComponent();
        }


        private void btn_count_Click(object sender, EventArgs e)
        {
            count++;
            lb_result.Text = "Kết quả: " + count.ToString();
        }

        private void lb_result_Click(object sender, EventArgs e)
        {
            lb_result.Text = "Kết quả: " + count.ToString();
        }
    }
}
