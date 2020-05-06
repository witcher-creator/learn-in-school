namespace DemoApp
{
    partial class Form1
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
            this.lb_result = new System.Windows.Forms.Label();
            this.btn_count = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // lb_result
            // 
            this.lb_result.AutoSize = true;
            this.lb_result.Location = new System.Drawing.Point(382, 310);
            this.lb_result.Name = "lb_result";
            this.lb_result.Size = new System.Drawing.Size(35, 13);
            this.lb_result.TabIndex = 0;
            this.lb_result.Text = "label1";
            this.lb_result.Click += new System.EventHandler(this.lb_result_Click);
            // 
            // btn_count
            // 
            this.btn_count.Location = new System.Drawing.Point(238, 162);
            this.btn_count.Name = "btn_count";
            this.btn_count.Size = new System.Drawing.Size(319, 40);
            this.btn_count.TabIndex = 1;
            this.btn_count.Text = "count";
            this.btn_count.UseVisualStyleBackColor = true;
            this.btn_count.Click += new System.EventHandler(this.btn_count_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btn_count);
            this.Controls.Add(this.lb_result);
            this.Name = "Form1";
            this.Text = "Tính toán bậy bạ";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lb_result;
        private System.Windows.Forms.Button btn_count;
    }
}

