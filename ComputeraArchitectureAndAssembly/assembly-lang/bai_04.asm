include "emu8086.inc"

.model small
.stack 
.data
    a dw 10 ; so bi nhan
    b dw 3 ; so nhan
    c dw ? ; tich
.code     
    mov ax, @data
    mov ds, ax
    
    mov ax, b       
    mov cx, c
repeat:
    cmp ax ,0
    je until
    add cx, a
    dec ax  
    jmp repeat
    
until:    
    mov c, cx
    mov ax, c   
    
    call print_num_uns 
    
    mov ah, 4ch
    int 21h
    define_print_num_uns
end