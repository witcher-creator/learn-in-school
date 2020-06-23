include "emu8086.inc"
.model small
.stack
.data 
    a dw 56
    b dw 5
    c dw ?
.code
    mov ax , @data
    mov ds, ax
    
    xor cx, cx
    mov ax, a
while:
    cmp ax,b
    
    jb endw  
    
    inc cx
    sub ax,b
    jmp while
endw:
    mov c, cx
    mov ax, c   
    
    call print_num_uns 
    
    mov ah, 4ch
    int 21h
    define_print_num_uns
end