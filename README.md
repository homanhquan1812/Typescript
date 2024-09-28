# Typescript
<div align="center">
  <img src="https://github.com/user-attachments/assets/7bef55f5-65cb-4f14-98ff-374d354d5008" alt="Gà Nấm Cake Shop Logo" width="600">
</div>

## Typescript là gì
## Cách cài đặt Typescript
1. Cài đặt **NodeJS**.
2. Cài đặt **Typescript**:
```
npm install -g typescript
```
3. Cài đặt **Typescript Compiler**:
```
npm i ts-node
```

## Cách chạy file Typescript
1. Tạo 1 file **HTML**.
2. Tạo 1 file Typescript có đuôi `.ts`.
3. Chạy lệnh này để chạy file Typescript:
```
tsc example.ts
```

Nếu bị lỗi này:
<div align="center">
  <img src="https://github.com/user-attachments/assets/18e87751-f971-4cad-815c-a984c977f471" alt="Gà Nấm Cake Shop Logo">
</div>

thì ta cần tắt 1 tính năng của Windows. Mở **PowerShell** lên và gõ lệnh này:

```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
