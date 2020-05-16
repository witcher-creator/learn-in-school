using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace sv_018101027
{
    public partial class Form_vd_04 : Form
    {
        public Form_vd_04()
        {
            InitializeComponent();
        }

        private void font_size_ValueChanged(object sender, EventArgs e)
        {
            content.Font = new Font(content.Font.Name, (float)font_size.Value, content.Font.Style);
        }



        private void font_bold_CheckedChanged(object sender, EventArgs e)
        {
            content.Font = new Font(content.Font, content.Font.Style ^ FontStyle.Bold);
        }

        private void font_italic_CheckedChanged(object sender, EventArgs e)
        {
            content.Font = new Font(content.Font, content.Font.Style ^ FontStyle.Italic);
        }

        private void font_underline_CheckedChanged(object sender, EventArgs e)
        {
            content.Font = new Font(content.Font, content.Font.Style ^ FontStyle.Underline);
        }

        private void font_vni_CheckedChanged(object sender, EventArgs e)
        {
            content.Font = new Font("VNI-Times", (float)font_size.Value, content.Font.Style);
        }

        private void font_tnr_CheckedChanged(object sender, EventArgs e)
        {
            content.Font = new Font("Times New Roman", (float)font_size.Value, content.Font.Style);
        }

        private void font_arial_CheckedChanged(object sender, EventArgs e)
        {
            content.Font = new Font("Arial", (float)font_size.Value, content.Font.Style);
        }

        private void Form_vd_04_Load(object sender, EventArgs e)
        {
            font_size.Value = 24;
        }
    }
}
