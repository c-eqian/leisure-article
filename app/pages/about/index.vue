<script setup lang="ts">
import { ref } from 'vue';

// 个人信息数据
const profileData = ref({
  avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face',
  accountName: 'jack',
  nickname: 'jack',
  age: 43,
  gender: '男',
  email: '4506289653@qq.com',
  phone: '14242424247',
  region: '江西',
  occupation: '务农',
  hobbies: '打乒乓球',
  signature: '相见恨晚',
  registrationDate: '2022-01-26 16:29:44'
});

// 性别选项
const genderOptions = ['男', '女', '其他'];

// 编辑模式
const isEditing = ref(false);

// 保存编辑
const saveProfile = () => {
  isEditing.value = false;
  // 这里可以添加保存到后端的逻辑
  // eslint-disable-next-line no-console
  console.log('保存个人信息:', profileData.value);
};

// 取消编辑
const cancelEdit = () => {
  isEditing.value = false;
  // 这里可以添加重置数据的逻辑
};
</script>

<template>
  <div class="profile-container">
    <div class="profile-content">
      <!-- 头像区域 -->
      <div class="avatar-section">
        <div class="avatar-container">
          <img :src="profileData.avatar" :alt="profileData.nickname" class="avatar-image" />
          <div v-if="isEditing" class="avatar-overlay">
            <button class="avatar-edit-btn">
              <i class="icon-camera">📷</i>
            </button>
          </div>
        </div>
        <h2 class="user-name">{{ profileData.nickname }}</h2>
        <p class="user-signature">{{ profileData.signature }}</p>
      </div>

      <!-- 个人信息表格 -->
      <div class="profile-info-card">
        <div class="card-header">
          <h3>个人信息</h3>
          <button class="edit-btn" @click="isEditing = !isEditing">
            {{ isEditing ? '取消' : '编辑' }}
          </button>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <label class="info-label">账户名</label>
            <div class="info-value">
              <input
                  v-if="isEditing"
                  v-model="profileData.accountName"
                  class="info-input"
                  type="text"
              />
              <span v-else>{{ profileData.accountName }}</span>
            </div>
          </div>

          <div class="info-item">
            <label class="info-label">昵称</label>
            <div class="info-value">
              <input
                  v-if="isEditing"
                  v-model="profileData.nickname"
                  class="info-input"
                  type="text"
              />
              <span v-else>{{ profileData.nickname }}</span>
            </div>
          </div>

          <div class="info-item">
            <label class="info-label">年龄</label>
            <div class="info-value">
              <input
                  v-if="isEditing"
                  v-model.number="profileData.age"
                  class="info-input"
                  type="number"
              />
              <span v-else>{{ profileData.age }}</span>
            </div>
          </div>

          <div class="info-item">
            <label class="info-label">性别</label>
            <div class="info-value">
              <select v-if="isEditing" v-model="profileData.gender" class="info-select">
                <option v-for="option in genderOptions" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
              <span v-else class="gender-badge">{{ profileData.gender }}</span>
            </div>
          </div>

          <div class="info-item">
            <label class="info-label">邮箱</label>
            <div class="info-value">
              <input v-if="isEditing" v-model="profileData.email" class="info-input" type="email" />
              <span v-else>{{ profileData.email }}</span>
            </div>
          </div>

          <div class="info-item">
            <label class="info-label">手机号码</label>
            <div class="info-value">
              <input v-if="isEditing" v-model="profileData.phone" class="info-input" type="tel" />
              <span v-else>{{ profileData.phone }}</span>
            </div>
          </div>

          <div class="info-item">
            <label class="info-label">地区</label>
            <div class="info-value">
              <input v-if="isEditing" v-model="profileData.region" class="info-input" type="text" />
              <span v-else>{{ profileData.region }}</span>
            </div>
          </div>

          <div class="info-item">
            <label class="info-label">职业</label>
            <div class="info-value">
              <input
                  v-if="isEditing"
                  v-model="profileData.occupation"
                  class="info-input"
                  type="text"
              />
              <span v-else>{{ profileData.occupation }}</span>
            </div>
          </div>

          <div class="info-item">
            <label class="info-label">兴趣爱好</label>
            <div class="info-value">
              <input
                  v-if="isEditing"
                  v-model="profileData.hobbies"
                  class="info-input"
                  type="text"
              />
              <span v-else>{{ profileData.hobbies }}</span>
            </div>
          </div>

          <div class="info-item">
            <label class="info-label">个性签名</label>
            <div class="info-value">
              <textarea
                  v-if="isEditing"
                  v-model="profileData.signature"
                  class="info-textarea"
                  rows="2"
              />
              <span v-else>{{ profileData.signature }}</span>
            </div>
          </div>

          <div class="info-item">
            <label class="info-label">注册日期</label>
            <div class="info-value">
              <span class="registration-date">{{ profileData.registrationDate }}</span>
            </div>
          </div>
        </div>

        <!-- 编辑按钮区域 -->
        <div v-if="isEditing" class="edit-actions">
          <button class="save-btn" @click="saveProfile">保存</button>
          <button class="cancel-btn" @click="cancelEdit">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg-content);
  min-height: 100vh;

  .profile-content {
    .avatar-section {
      text-align: center;
      margin-bottom: 3rem;

      .avatar-container {
        position: relative;
        display: inline-block;
        margin-bottom: 1.5rem;

        .avatar-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--primary-color);
          box-shadow: var(--shadow-medium);
          transition: all var(--transition-normal);

          &:hover {
            transform: scale(1.05);
            box-shadow: var(--shadow-heavy);
          }
        }

        .avatar-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-normal);

          .avatar-edit-btn {
            background: var(--primary-color);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            color: white;
            cursor: pointer;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all var(--transition-normal);

            &:hover {
              background: var(--primary-hover);
              transform: scale(1.1);
            }
          }
        }

        &:hover .avatar-overlay {
          opacity: 1;
        }
      }

      .user-name {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0 0 0.5rem 0;
      }

      .user-signature {
        font-size: 1rem;
        color: var(--text-secondary);
        font-style: italic;
        margin: 0;
      }
    }

    .profile-info-card {
      background: var(--bg-card);
      border-radius: var(--border-radius-large);
      padding: 2rem;
      box-shadow: var(--shadow-light);
      border: 1px solid var(--border-color);
      transition: all var(--transition-normal);

      &:hover {
        box-shadow: var(--shadow-medium);
        transform: translateY(-2px);
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--border-color);

        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .edit-btn {
          background: var(--primary-color);
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all var(--transition-normal);

          &:hover {
            background: var(--primary-hover);
            transform: translateY(-1px);
            box-shadow: var(--shadow-light);
          }
        }
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .info-label {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .info-value {
            .info-input,
            .info-select,
            .info-textarea {
              width: 100%;
              padding: 0.75rem;
              border: 2px solid var(--border-color);
              border-radius: var(--border-radius);
              font-size: 1rem;
              color: var(--text-primary);
              background: var(--bg-content);
              transition: all var(--transition-normal);

              &:focus {
                outline: none;
                border-color: var(--primary-color);
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
              }
            }

            .info-textarea {
              resize: vertical;
              min-height: 60px;
            }

            span {
              font-size: 1rem;
              color: var(--text-primary);
              padding: 0.75rem 0;
              display: block;
              min-height: 1.5rem;

              &.gender-badge {
                display: inline-block;
                background: var(--primary-color);
                color: white;
                padding: 0.25rem 0.75rem;
                border-radius: var(--border-radius);
                font-size: 0.9rem;
                font-weight: 500;
                width: fit-content;
              }

              &.registration-date {
                color: var(--text-muted);
                font-size: 0.9rem;
              }
            }
          }
        }
      }

      .edit-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid var(--border-color);

        .save-btn,
        .cancel-btn {
          padding: 0.75rem 2rem;
          border: none;
          border-radius: var(--border-radius);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-normal);

          &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-light);
          }
        }

        .save-btn {
          background: var(--success-color);
          color: white;

          &:hover {
            background: var(--success-hover);
          }
        }

        .cancel-btn {
          background: var(--text-muted);
          color: white;

          &:hover {
            background: var(--text-secondary);
          }
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .profile-container {
    padding: 1rem;

    .profile-header {
      margin-bottom: 2rem;

      .profile-title {
        font-size: 2rem;
      }
    }

    .profile-content {
      .profile-info-card {
        padding: 1.5rem;

        .info-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
      }
    }
  }
}

// 暗黑模式适配
[data-theme='dark'] {
  .profile-container {
    .profile-content {
      .profile-info-card {
        background: var(--bg-card);
        border-color: var(--border-color);

        .card-header {
          border-bottom-color: var(--border-color);
        }

        .edit-actions {
          border-top-color: var(--border-color);
        }
      }
    }
  }
}
</style>
