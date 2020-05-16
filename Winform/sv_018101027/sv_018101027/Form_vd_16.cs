using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace sv_018101027
{
    public partial class Form_vd_16 : Form
    {
        public Form_vd_16()
        {
            InitializeComponent();
        }

        private void Form_vd_16_Load(object sender, EventArgs e)
        {
            comboBox.Items.Add("Việt Nam");
            comboBox.Items.Add("Nhật Bản");
            comboBox.Items.Add("Hàn Quốc");
            comboBox.Items.Add("Trung Quốc");
        }

        private void bt_them_Click(object sender, EventArgs e)
        {
            comboBox.Items.Add(content.Text);
        }

        private void bt_xoa_Click(object sender, EventArgs e)
        {
            comboBox.Items.RemoveAt(comboBox.SelectedIndex);
        }

        private void bt_capnhat_Click(object sender, EventArgs e)
        {
            comboBox.Items[comboBox.SelectedIndex] = content.Text;
        }

        private void bt_thoat_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
