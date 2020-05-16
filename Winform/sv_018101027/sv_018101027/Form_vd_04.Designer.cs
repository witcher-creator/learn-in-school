namespace sv_018101027
{
    partial class Form_vd_04
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.content = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.font_size = new System.Windows.Forms.NumericUpDown();
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.font_underline = new System.Windows.Forms.CheckBox();
            this.font_italic = new System.Windows.Forms.CheckBox();
            this.font_bold = new System.Windows.Forms.CheckBox();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.font_arial = new System.Windows.Forms.RadioButton();
            this.font_tnr = new System.Windows.Forms.RadioButton();
            this.font_vni = new System.Windows.Forms.RadioButton();
            ((System.ComponentModel.ISupportInitialize)(this.font_size)).BeginInit();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.SuspendLayout();
            // 
            // content
            // 
            this.content.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F);
            this.content.Location = new System.Drawing.Point(52, 72);
            this.content.Name = "content";
            this.content.Size = new System.Drawing.Size(445, 26);
            this.content.TabIndex = 0;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F);
            this.label2.Location = new System.Drawing.Point(49, 44);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(70, 20);
            this.label2.TabIndex = 2;
            this.label2.Text = "Mẫu chữ";
            // 
            // font_size
            // 
            this.font_size.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F);
            this.font_size.Location = new System.Drawing.Point(555, 72);
            this.font_size.Minimum = new decimal(new int[] {
            1,
            0,
            0,
            0});
            this.font_size.Name = "font_size";
            this.font_size.Size = new System.Drawing.Size(120, 26);
            this.font_size.TabIndex = 3;
            this.font_size.Value = new decimal(new int[] {
            1,
            0,
            0,
            0});
            this.font_size.ValueChanged += new System.EventHandler(this.font_size_ValueChanged);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F);
            this.label1.Location = new System.Drawing.Point(551, 44);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(59, 20);
            this.label1.TabIndex = 4;
            this.label1.Text = "Cỡ chữ";
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.font_underline);
            this.groupBox1.Controls.Add(this.font_italic);
            this.groupBox1.Controls.Add(this.font_bold);
            this.groupBox1.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F);
            this.groupBox1.Location = new System.Drawing.Point(52, 141);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(287, 248);
            this.groupBox1.TabIndex = 5;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Kiểu chữ";
            // 
            // font_underline
            // 
            this.font_underline.AutoSize = true;
            this.font_underline.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Underline);
            this.font_underline.Location = new System.Drawing.Point(26, 165);
            this.font_underline.Name = "font_underline";
            this.font_underline.Size = new System.Drawing.Size(96, 24);
            this.font_underline.TabIndex = 2;
            this.font_underline.Text = "Underline";
            this.font_underline.UseVisualStyleBackColor = true;
            this.font_underline.CheckedChanged += new System.EventHandler(this.font_underline_CheckedChanged);
            // 
            // font_italic
            // 
            this.font_italic.AutoSize = true;
            this.font_italic.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Italic);
            this.font_italic.Location = new System.Drawing.Point(26, 107);
            this.font_italic.Name = "font_italic";
            this.font_italic.Size = new System.Drawing.Size(61, 24);
            this.font_italic.TabIndex = 1;
            this.font_italic.Text = "Italic";
            this.font_italic.UseVisualStyleBackColor = true;
            this.font_italic.CheckedChanged += new System.EventHandler(this.font_italic_CheckedChanged);
            // 
            // font_bold
            // 
            this.font_bold.AutoSize = true;
            this.font_bold.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold);
            this.font_bold.Location = new System.Drawing.Point(26, 50);
            this.font_bold.Name = "font_bold";
            this.font_bold.Size = new System.Drawing.Size(64, 24);
            this.font_bold.TabIndex = 0;
            this.font_bold.Text = "Bold";
            this.font_bold.UseVisualStyleBackColor = true;
            this.font_bold.CheckedChanged += new System.EventHandler(this.font_bold_CheckedChanged);
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.font_arial);
            this.groupBox2.Controls.Add(this.font_tnr);
            this.groupBox2.Controls.Add(this.font_vni);
            this.groupBox2.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F);
            this.groupBox2.Location = new System.Drawing.Point(498, 141);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(235, 248);
            this.groupBox2.TabIndex = 6;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Font chữ";
            // 
            // font_arial
            // 
            this.font_arial.AutoSize = true;
            this.font_arial.Font = new System.Drawing.Font("Arial", 12F);
            this.font_arial.Location = new System.Drawing.Point(37, 165);
            this.font_arial.Name = "font_arial";
            this.font_arial.Size = new System.Drawing.Size(58, 22);
            this.font_arial.TabIndex = 2;
            this.font_arial.TabStop = true;
            this.font_arial.Text = "Arial";
            this.font_arial.UseVisualStyleBackColor = true;
            this.font_arial.CheckedChanged += new System.EventHandler(this.font_arial_CheckedChanged);
            // 
            // font_tnr
            // 
            this.font_tnr.AutoSize = true;
            this.font_tnr.Font = new System.Drawing.Font("Times New Roman", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.font_tnr.Location = new System.Drawing.Point(37, 107);
            this.font_tnr.Name = "font_tnr";
            this.font_tnr.Size = new System.Drawing.Size(143, 23);
            this.font_tnr.TabIndex = 1;
            this.font_tnr.TabStop = true;
            this.font_tnr.Text = "Times New Roman";
            this.font_tnr.UseVisualStyleBackColor = true;
            this.font_tnr.CheckedChanged += new System.EventHandler(this.font_tnr_CheckedChanged);
            // 
            // font_vni
            // 
            this.font_vni.AutoSize = true;
            this.font_vni.Font = new System.Drawing.Font("VNI-Times", 12F);
            this.font_vni.Location = new System.Drawing.Point(37, 50);
            this.font_vni.Name = "font_vni";
            this.font_vni.Size = new System.Drawing.Size(106, 25);
            this.font_vni.TabIndex = 0;
            this.font_vni.TabStop = true;
            this.font_vni.Text = "VNI-Times";
            this.font_vni.UseVisualStyleBackColor = true;
            this.font_vni.CheckedChanged += new System.EventHandler(this.font_vni_CheckedChanged);
            // 
            // Form_vd_04
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.font_size);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.content);
            this.Name = "Form_vd_04";
            this.Text = "Font Chữ";
            this.Load += new System.EventHandler(this.Form_vd_04_Load);
            ((System.ComponentModel.ISupportInitialize)(this.font_size)).EndInit();
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox content;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.NumericUpDown font_size;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.CheckBox font_underline;
        private System.Windows.Forms.CheckBox font_italic;
        private System.Windows.Forms.CheckBox font_bold;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.RadioButton font_arial;
        private System.Windows.Forms.RadioButton font_tnr;
        private System.Windows.Forms.RadioButton font_vni;
    }
}