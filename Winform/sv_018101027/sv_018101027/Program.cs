using System;
using System.Collections.Generic;
using System.Windows.Forms;

namespace sv_018101027
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form_vd_04());
            //Application.Run(new Form_vd_14());
            //Application.Run(new Form_vd_16());
        }
    }
}
