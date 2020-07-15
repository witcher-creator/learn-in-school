include "emu8086.inc"

.model small
.stack
.data
    msg db "lorem$"
.code
    mov ax, @data
    mov ds, ax
    
    mov ah,9
    lea dx,msg    
    int 21h  
.end
                         
                     