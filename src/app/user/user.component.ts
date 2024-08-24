import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  currentPage = 1;
  pageSize = 10;
  totalPages!: number;
  pageNumbers: number[] = [];

  constructor(private uploadService: UploadService, private router:Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.uploadService.getUsers(this.currentPage-1, this.pageSize).subscribe(data => {
      this.users = data.content;
      this.totalPages = data.totalPages;
      this.generatePageNumbers();
    });
  }

  generatePageNumbers() {
    const maxButtons = 3;
    const startPage = Math.max(1, this.currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(this.totalPages - 1, startPage + maxButtons - 1);
    
    this.pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      this.pageNumbers.push(i);
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadUsers();
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  goBack() {
    this.router.navigate([''])
  }
}
